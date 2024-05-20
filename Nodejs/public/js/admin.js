$(document).ready(function(){
    // gets all the teams
    loadTeams();
    // gets all players
    loadPlayers();

    $('#save-team').click(function (e) { 
        e.preventDefault();
        saveTeam();
    });

    $('#save-player').click(function (e) { 
        e.preventDefault();
        savePlayer();
    });

    /**
     * Load Teams on initial load of admin and also appends list to player registration form
     */
    function loadTeams(){
        $.ajax({
            url: `${hostUrl}/getTeams`,
            type: 'GET',
            contentType: 'application/json', // Set content type to JSON
            success: function(data){
                // appends teams for player registration to select field
                selectTeamforplayer(data);
                let teamsData = '';
                teamsData += `<table>
                <tr>
                  <th>Team Name</th>
                  <th>Owner</th>
                  <th>Edit</th>
                </tr>`
                // Handle successful response
                data.forEach((object)=>{
                    teamsData += `
                    <tr>
                        <td class="list-select-team" teamsId="${object._id}">${object.teamName}</td>
                        <td teamsId="${object._id}">${object.teamOwnerName}</td>
                        <td><span class="delete-team" teamsId="${object._id}">Delete</span></td>
                    </tr>`
                })
                teamsData += `</table>`
                $('#teams-list').html(teamsData);
            }
        });
    }

    /**
     * Append Teams list to select temas for player registration
     * @param {*} teamsData 
     */
    const selectTeamforplayer = (teamsData) => {
        $('#teamDetails').empty();
        let option = '';
        teamsData.forEach((val)=>{
            option += `<option value="${val._id}" select-teams-id="${val._id}">${val.teamName}</option>`
        });
        $('#teamDetails').append(option);
    }

    /**
     * 
     * @returns Save Teams Data
     */
    function saveTeam(){
        let objectTeams = {}
        let teamName = $('#teamname').val()
        if(!teamName){
            $('#teamname-error').removeClass('hide')
            return
        }else{
            $('#teamname-error').addClass('hide')
            objectTeams.teamName = teamName;
        }

        let teamCityName = $('#teamcity').val()
        if(!teamCityName){
            $('#teamcity-error').removeClass('hide')
            return
        }else{
            $('#teamcity-error').addClass('hide')
            objectTeams.teamCityName = teamCityName;
        }

        let teamOwnerName = $('#ownername').val()
        if(!teamOwnerName){
            $('#ownername-error').removeClass('hide')
            return
        }else{
            $('#ownername-error').addClass('hide')
            objectTeams.teamOwnerName = teamOwnerName;
        }

        $.ajax({
            url: `${hostUrl}/saveteams`,
            type: 'POST',
            contentType: 'application/json', // Set content type to JSON
            data: JSON.stringify(objectTeams),
            success: function(data){
                // Handle successful response
                $('#teamname').val('') // empty form on successful response
                $('#teamcity').val('') // empty form on successful response
                $('#ownername').val('') // empty form on successful response
                $('#exampleModal').modal('hide');
                loadTeams();
            }
        });
    }

    /**
     * 
     * @returns save player data
     */
    function savePlayer(){
        let objectTeams = {}
        let playerName = $('#playerName').val()
        if(!playerName){
            $('#playerName-error').removeClass('hide')
            return
        }else{
            $('#playerName-error').addClass('hide')
            objectTeams.playerName = playerName;
        }

        let city = $('#playerCity').val()
        if(!city){
            $('#playerCity-error').removeClass('hide')
            return
        }else{
            $('#playerCity-error').addClass('hide')
            objectTeams.city = city;
        }

        let highestScore = $('#Highestscore').val()
        if(!highestScore){
            $('#Highestscore-error').removeClass('hide')
            return
        }else{
            $('#Highestscore-error').addClass('hide')
            objectTeams.highestScore = highestScore;
        }

        let teamID = $('#teamDetails').val()
        if(!teamID){
            $('#teamDetails-error').removeClass('hide')
            return
        }else{
            $('#teamDetails-error').addClass('hide')
            objectTeams.teamID = teamID;
        }

        $.ajax({
            url: `${hostUrl}/saveplayer`,
            type: 'POST',
            contentType: 'application/json', // Set content type to JSON
            data: JSON.stringify(objectTeams),
            success: function(data){
                // Handle successful response
                $('#playerName').val('') // empty form on successful response
                $('#playerCity').val('') // empty form on successful response
                $('#Highestscore').val('') // empty form on successful response
                $('#playerModal').modal('hide');
                loadPlayers();
            }
        });
    }

     /**
     * Load Players on initial load of admin and also appends list to player registration form
     */
     function loadPlayers(){
        $.ajax({
            url: `${hostUrl}/getPlayer`,
            type: 'GET',
            contentType: 'application/json', // Set content type to JSON
            success: function(data){
                let playerData = '';
                playerData += `<table>
                <tr>
                  <th>Player Name</th>
                  <th>Team</th>
                  <th>Edit</th>
                </tr>`
                // Handle successful response
                data.forEach((object)=>{
                    playerData += `
                    <tr>
                        <td class="list-select-team" teamsId="${object._id}">${object.playerName}</td>
                        <td teamsId="">${object.teamID.teamName}</td>
                        <td><span class="delete-team" playerID="${object._id}">Delete</span></td>
                    </tr>`
                })
                playerData += `</table>`
                $('#player-list').html(playerData);
            }
        });
    }
    
});