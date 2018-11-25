// $(function(){
//     $('#name').keyup(function() {
//         $('#placeholder_name').text($('#name').val())
//     })
// });


    //chrome.storage.sync.get(function(result){console.log(result)}) to test the value stored in the chrome storage
    // Go to the extension -> right click -> Inspect  popup and run the following script in the console

    // Ways to access object from the callback
    // chrome.storage.sync.get('placeholder_name', (data) => {   // or thsi can be function() { ------- content of the function goes here }
    //     alert(data.placeholder_name);
    // });

    chrome.storage.sync.get('placeholder_name', (data) => {
        if (data.placeholder_name) {
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('general').style.display = 'block';
            $('#placeholder_name').text(data.placeholder_name)
        }
        else {
            document.getElementById('general').style.display = 'none';
            document.getElementById('welcome').style.display = 'block';
            $("#save").click(function () {
                var name = $('#name').val();
                chrome.storage.sync.set({'placeholder_name': name}, function () {
                    document.getElementById('welcome').style.display = 'none';
                    document.getElementById('general').style.display = 'block';
                    $('#placeholder_name').text(name);
                });
            });
        }

    });

/*

chrome.storage.sync.set({'placeholder_name' : placeholder_name} , () => {
    if(chrome.runtime.error) {
        document.getElementById('placeholder_name').innerHTML = 'Error';
    }
});

chrome.storage.sync.get('placeholder_name', () => {
    if (placeholder_name){
        document.getElementById('name').style.display = 'none';
    }
});*/
