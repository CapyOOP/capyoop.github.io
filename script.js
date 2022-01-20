function invis_name(){
  document.getElementById("name").style.color = "transparent"; 
};
function invis_work(){
  document.getElementById("work").style.color = "transparent"; 
};

document.body.onkeyup = function (e) {
 if ((e.keyCode == 32)) {
  document.getElementById("name").style.display = "none";
  document.getElementById("work").style.display = "none";
 }
};
const limit = 25;
let page = 1;
let getContactsListQueryUrl = '/api/v4/contacts';

function getContacts() {
    $.ajax({
        url: getContactsListQueryUrl,
        method: 'GET',
        data: {
            limit: limit,
            with: 'leads',
            page: page
        }
    }).done(function(data) {
        if (data) {
            console.log(data)

        } else {
            console.log('Контактов нет');
            return false;
        }
    }).fail(function(data) {
        console.log('Что-то пошло не так c получением контактов');
        console.log(data);
        return false;
    })

    page++;
}
//-------------------------------------------