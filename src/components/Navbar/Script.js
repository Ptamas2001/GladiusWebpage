

function Script() {

    ('.navTrigger').click(function () {
        (this).toggleClass('active');
        console.log("Clicked menu");
        ("#mainListDiv").toggleClass("show_list");
        ("#mainListDiv").fadeIn();
    
    });
             

  
}

export default Script;

