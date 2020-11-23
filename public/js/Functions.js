function generate_html_to_pdf(){
    var doc = new jsPDF();
    doc.setFontSize(40);
    doc.text(60,20,'Gupta path lab');
    var firstName = $('#fname').val();
    var lastName = $('#lname').val();
    var Country = $('#country').val();
    var Subject = $('#subject').val();
    var age = $('#age').val();
    var image = $('#myfile').val();

    var specialElementHandlers = {
        '#elementH' : function(element,renderer){
            return true;
        }
    };

    doc.setFontSize(12);
    doc.text(20,40,'Firstname: ');
    doc.fromHTML(firstName,50,36,{
        'width':150,
        'elementHandlers': specialElementHandlers
    });

    doc.text(20,50,'LastName: ');
    doc.fromHTML(lastName,50,46,{
        'width':170,
        'elementHandlers': specialElementHandlers
    });

    doc.text(20,60,'Country:');
    doc.fromHTML(Country,50,56,{
        'width':170,
        'elementHandlers': specialElementHandlers
    });

    doc.text(20,70,'Address:');
    doc.fromHTML(Subject,50,66,{
        'width':170,
        'elementHandlers': specialElementHandlers
    });

    doc.text(20,80,'Age:');
    doc.fromHTML(age,50,76,{
        'width':170,
        'elementHandlers': specialElementHandlers
    });

    window.open(doc.output('bloburl'), '_blank');
}

