// $(function(){
//     $('#name').keyup(function() {
//         $('#placeholder_name').text($('#name').val())
//     })
// });


    //chrome.storage.sync.get(function(result){console.log(result)}) to test the value stored in the chrome storage
    // Go to the extension -> right click -> Inspect  popup and run the following script in the console

    // Ways to access object from the callback
    // chrome.storage.sync.get('placeholder_name', (data) => {   // or thsi can be function() { ------- $('#greet')ent of the function goes here }
    //     alert(data.placeholder_name);
    // });

    chrome.storage.sync.get('placeholder_name', (data) => {
        if (data.placeholder_name) {
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('general').style.display = 'block';
            var d = new Date();
            var time = d.getHours();
            if(time < 4) {
                $('#greet').text('Good night');
                $('body').css({background : "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)" });
            }
            else if (time > 4 && time < 12) {
                $('#greet').text('Good morning');
                $('body').css({background : "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"});

            }
            else if (time < 17) {
                $('#greet').text('Good afternoon');
                $('body').css({background :"linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
           });


            }
            else if (time < 21) {
                $('#greet').text('Good evening');
                $('body').css({background :"#f3e7e9"});

            }
            else if (time < 24) {
                $('#greet').text('Good night');
                $('body').css({background :"linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)" });

            }
            $('#placeholder_name').text(data.placeholder_name);
            $('button').hover(
                function(){ $(this).addClass('animated infinite pulse') },
                function(){ $(this).removeClass('animated infinite pulse') }
            )
        }
        else {
            document.getElementById('general').style.display = 'none';
            document.getElementById('welcome').style.display = 'block';
            $("#save").click(function () {
                var name = $('#name').val();
                chrome.storage.sync.set({'placeholder_name': name}, function () {
                    document.getElementById('welcome').style.display = 'none';
                    document.getElementById('general').style.display = 'block';
                    var d = new Date();
                    var time = d.getHours();
                    if(time < 4){
                        $('#greet').text('Good night');
                        $('body').css({background : "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"});
                    }
                    else if (time > 4 && time < 12) {
                        $('#greet').text('Good morning');
                        $('body').css({background : "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"});

                    }
                    else if (time < 17) {
                        $('#greet').text('Good afternoon');
                        $('body').css({background : "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)" });

                    }
                    else if (time < 21) {
                        $('#greet').text('Good evening');
                        $('body').css({background : "linear-gradient(to right, #fa709a 0%, #fee140 100%)"});
                    }
                    else if (time < 24) {
                        $('#greet').text('Good night');
                        $('body').css({background : "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"});

                    }
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
