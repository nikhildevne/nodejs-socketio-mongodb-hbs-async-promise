$(document).ready(function(){

$('#registerbtn').click(function (e) { 
    e.preventDefault();
    saveUser();
});

$('#loginbtn').click(function (e) { 
    e.preventDefault();
    login();
});

/**
     * 
     * @returns save player data
     */
function saveUser(){
    let objectTeams = {}
    let name = $('#name').val()
    if(!name){
        alert('name req')
        return
    }else{
        objectTeams.name = name;
    }

    let email = $('#remailid').val()
    if(!email){
       alert('register email req')
        return
    }else{
        objectTeams.email = email;
    }

    let password = $('#rpassword').val()
    if(!password){
        alert('register password required')
        return
    }else{
        objectTeams.password = password;
    }

    $.ajax({
        url: `${hostUrl}/saveuser`,
        type: 'POST',
        contentType: 'application/json', // Set content type to JSON
        data: JSON.stringify(objectTeams),
        success: function(data){
            // Handle successful response
            $('#name').val('') // empty form on successful response
            $('#remailid').val('') // empty form on successful response
            $('#rpassword').val('') // empty form on successful response
            alert('user saved successfully')
        }
    });
}

function login(){
    let objectTeams = {}

    let email = $('#lemailid').val()
    if(!email){
        alert('email required')
        return
    }else{
        objectTeams.email = email;
    }

    let password = $('#lpassword').val()
    if(!password){
        alert('password required')
        return
    }else{
        objectTeams.password = password;
    }

    $.ajax({
        url: `${hostUrl}/login`,
        type: 'POST',
        contentType: 'application/json', // Set content type to JSON
        data: JSON.stringify(objectTeams),
        success: function(response){
            // Handle successful response
            $('#lemail').val('') // empty form on successful response
            $('#lpassword').val('') // empty form on successful response
            if(response.data && response.data._id){
                localStorage.setItem('userid',response.data._id)
                localStorage.setItem('Token',response.token)
                window.location.href = `${hostUrl}/user`;
            }else{
                alert('error')
            }
        }
    });
}
    
});