import React, { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import TWEEN from 'tween.js';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { Ammo } from './Ammo';
import "./3D-parts.css"

const CameraComponent = ({ animationStartable }) => {
  const { camera, gl, size } = useThree();
  const controls = useRef(null);
  const originalPosition = new THREE.Vector3(-9, 4, -10);
  const originalRotation = new THREE.Euler(0, 0, 0);
  const behindScopePosition = new THREE.Vector3(0, 2, -4);
  const lookUpPosition = new THREE.Euler(-Math.PI / 2, 0, 0);

  const [showText, setShowText] = useState(true);
  const [animationEnded, setAnimationEnded] = useState(false);
  camera.position.set(8,4,0.5);
  useEffect(() => {
    camera.far = calculateNewFar(camera.aspect);
    camera.updateProjectionMatrix();
  }, [camera, size]);

  const calculateNewFar = (aspect) => {
    const distanceToTarget = camera.position.distanceTo(behindScopePosition);
    const newFar = distanceToTarget + 10 * aspect;
    return newFar;
  };

  const resetCamera = () => {
    camera.position.copy(new THREE.Vector3(8, 4, 0.5));
    camera.rotation.set(0, 0, 0);
    setAnimationEnded(false);
    setShowText(true);
  };

  useEffect(() => {
    if (typeof animationStartable !== 'undefined' && animationStartable) {
      document.body.style.overflow = 'hidden';
      controls.current = new PointerLockControls(camera, gl.domElement);
      controls.current.addEventListener('lock', () => {
        console.log('Pointer Locked');
      });
      controls.current.addEventListener('unlock', () => {
        console.log('Pointer Unlocked');
      });
    }
  }, [camera, animationStartable, gl]);

  useEffect(() => {
    if (controls.current) {
      controls.current.lock();
    }
  }, [controls]);

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      resetCamera();
      TWEEN.removeAll();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (typeof animationStartable !== 'undefined' && animationStartable) {
      controls.current.lock();

      const targetPos = new THREE.Vector3(-8, 3, 4);
      const targetRotation = new THREE.Euler(0, Math.PI / 2, 0);

      const forwardAnimation = new TWEEN.Tween(camera.position)
        .to(targetPos, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut);
      setShowText(false);

      const forwardRotationAnimation = new TWEEN.Tween(camera.rotation)
        .to(targetRotation, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut);

      const backwardAnimation = new TWEEN.Tween(camera.position)
        .to(originalPosition, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);

      const backwardRotationAnimation = new TWEEN.Tween(camera.rotation)
        .to(originalRotation, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);

      const behindScopeAnimation = new TWEEN.Tween(camera.position)
        .to(behindScopePosition, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);

      const lookUpAnimation = new TWEEN.Tween(camera.rotation)
        .to(lookUpPosition, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut);

      const onAnimationComplete = () => {
        setAnimationEnded(true);
      };

      forwardAnimation.chain(forwardRotationAnimation);
      forwardRotationAnimation.chain(backwardAnimation);
      backwardAnimation.chain(backwardRotationAnimation);
      backwardRotationAnimation.chain(behindScopeAnimation);

      const delay = 0;
      behindScopeAnimation.chain(
        new TWEEN.Tween({}).to({}, delay).onComplete(() => {
          lookUpAnimation.onComplete(onAnimationComplete).start();
        })
      );

      forwardAnimation.start();

      const animate = () => {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [camera, animationStartable]);

  return (
    <>
      {null},
      {showText && (
        <Html>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1 className='Tittle-h1'>Break the rules!</h1>
          </div>
        </Html>
      )}
      <Ammo camera={camera} animationEnded={animationEnded} resetCamera={resetCamera} controls={controls}/>
    </>
  );
};

export default CameraComponent;
