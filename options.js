$(document).ready(
    function () {
        $("#save_update_name").click( function () {
            var update_name = $("#update_name").val();
            chrome.storage.sync.set({'placeholder_name': update_name}, function (data) {
                alert( "Name updated");
                close();
            })
        });

    }
);


