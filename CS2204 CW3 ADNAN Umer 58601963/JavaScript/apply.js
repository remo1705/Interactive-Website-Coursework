document.addEventListener("DOMContentLoaded", function(){
    window.onload = f11;
    var initialempty = document.querySelector("table").innerHTML;
    const h1 = document.querySelector("#techzone");
    const h2 = document.querySelector("#innozone");
    const h3 = document.querySelector("#ecozone");
    const f3 = document.querySelector(".Ecology_Zone");
    const f2 = document.querySelector(".Innovation_Zone");
    const f1 = document.querySelector(".Technology_Zone");

    h1.onclick = f11;
    function f11(){
        f1.setAttribute("style", "display: inline-block");
        f2.setAttribute("style", "display: none");
        f3.setAttribute("style", "display: none");
        h1.setAttribute("style", "background-color:white");
        h2.setAttribute("style", "background-color:gray");
        h3.setAttribute("style", "background-color:gray");
    }
    
    h2.onclick = f22;
    function f22(){
        f2.setAttribute("style", "display: inline-block");
        f1.setAttribute("style", "display: none");
        f3.setAttribute("style", "display: none");
        h2.setAttribute("style", "background-color:white");
        h1.setAttribute("style", "background-color:gray");
        h3.setAttribute("style", "background-color:gray");
    }
    
    h3.onclick = f33;
    function f33(){
        f3.setAttribute("style", "display: inline-block");
        f2.setAttribute("style", "display: none");
        f1.setAttribute("style", "display: none");
        h3.setAttribute("style", "background-color:white");
        h2.setAttribute("style", "background-color:gray");
        h1.setAttribute("style", "background-color:gray");
    }

    var forms = document.querySelectorAll("form");
    for (let i=0; i<forms.length;i++){
        forms[i].addEventListener("mouseover", hover);
        forms[i].addEventListener("mouseleave", unhover);
    }
    function hover(){
        this.setAttribute("style", "background-color:gray");
    }
    function unhover() {
        this.setAttribute("style", "background-color: rgb(94, 50, 132)");
    }

// selecting buttons; giving them onclick event
        allbtns = document.querySelectorAll("button");
        for (let i = 0; i<allbtns.length; i++){
            allbtns[i].onclick = f;
        }


        var techzone_array = ["TechWave-Solutions","Quantum-Leap-Technologies","CyberGuard-Systems","SmartCity-Innovations","Connectify-Networks"];
        var innozone_array = ["EcoTech-Labs","HealthSphere-Innovations","CreaTech-Studio"];
        var ecozone_array = ["GreenFuture-Enterprises","WaterWise Solutions","ReCycle-Innovations", "Ecobuild-Technologies"];
        var ranks = Array(10);
        var max_rank = 0;
        var companies = [];
        var noofcompanies=0;

        function f(){
            var company = this.id;
            company = company.replace(/-/g, " ")
            var rank = this.previousElementSibling.value;
            this.parentNode.reset(); 
            if(rank.length<=0 ||rank % 1 != 0){
                event.preventDefault();
                alert("Please enter the rank of chosen company");
                return;
            }
            else if(rank<1 || rank>10){
                event.preventDefault();
                alert("Please enter the rank of chosen between 1 and 10");
                return;
            }
            else if (companies.indexOf(company)!=-1){
                event.preventDefault();
                alert("You have already chosen this company");
                return;
            }
            else if (ranks.indexOf(rank)!=-1){
                event.preventDefault();
                alert("You have already chosen this rank");
                return;
            }
            if (Number(rank) > Number(max_rank)){
                max_rank = rank;
            } 

            if (techzone_array.indexOf(this.id) != -1){
                event.preventDefault();
                var zone = "Technology Zone";
                ranks[rank] = rank;
                companies.push(company);
                x = document.getElementById([rank]);
                updateTable();
                x.innerHTML = "<td>" + zone +"</td>" + "<td>" + company +"</td>" + "<td>" + rank +"</td>";
                }
            else if (innozone_array.indexOf(this.id) !=-1){
                event.preventDefault();
                zone = "Innovation Zone";
                ranks[rank] = rank;
                companies.push(company);
                x = document.getElementById([rank]);
                updateTable();
                x.innerHTML = "<td>" + zone +"</td>" + "<td>" + company +"</td>" + "<td>" + rank +"</td>";
                }
            
            else if (ecozone_array.indexOf(this.id) !=-1){
                event.preventDefault();
                zone = "Ecology Zone";
                ranks[rank] = rank;
                companies.push(company);
                x = document.getElementById([rank]);
                updateTable();
                x.innerHTML = "<td>" + zone +"</td>" + "<td>" + company +"</td>" + "<td>" + rank +"</td>";
                }
   
            switch (rank){
                case "1" :
                    msg = "You have chosen " + company + " as your "+ rank +"st "+ "chosen company in " + zone + " successfully";
                    alert(msg);
                    break;
                
                case "2" :
                    msg = "You have chosen " + company + " as your "+ rank +"nd "+ "chosen company in " + zone + " successfully";
                    alert(msg);
                    break;
                
                case "3" :
                    msg = "You have chosen " + company + " as your "+ rank +"rd "+ "chosen company in " + zone + " successfully";
                    alert(msg);
                    break;

                default:
                    msg = "You have chosen " + company + " as your "+ rank +"th "+ "chosen company in " + zone + " successfully";
                    alert(msg);
                    break;
                }

            }
            var totalno = document.getElementById("totalno");
            var time = document.querySelector(".time");
            function updateTable(){
                ansx = CurrentTime();
                time.innerHTML = "Last Change time: " + ansx;
                noofcompanies = companies.length;
                totalno.innerHTML = "Total Number of Companies Applied: " + noofcompanies;
            }
            function CurrentTime(){
                var date = new Date();
                return date;
            }

            var submit = document.getElementById("submit");
            submit.onclick = CheckTable;
            var ptag = document.getElementById("tberror")
            
            function CheckTable() {
                var tableMsg = "";
                event.preventDefault();
                ptag.innerHTML = "";
                gaps = CheckGap(ranks);

                if (noofcompanies === 0) {
                    tableMsg = "You have not chosen any company.";
                }
            
                else if (gaps.length != 0){
                    switch (gaps[0]) {
                        case 1:
                            tableMsg = "You have not chosen your 1st chosen company, ";
                            break;
                        case 2:
                            tableMsg = "You have not chosen your 2nd chosen company, ";
                            break;
                        case 3:
                            tableMsg = "You have not chosen your 3rd chosen company, ";
                            break;
                        default:
                            tableMsg = "You have not chosen your " + gaps[0]+ "th chosen company, ";
                            break;
                    }
                    for (let index = 1; index < gaps.length; index++) {
                        switch (gaps[index]) {
                            case 2:
                                tableMsg = tableMsg + "and 2nd chosen company, ";
                                break;
                            case 3:
                                tableMsg = tableMsg + "and 3rd chosen company, ";
                                break;
                            default:
                                tableMsg = tableMsg + "and " + gaps[index ]+ "th chosen company, ";
                                break;
                        }
                    }
                    tableMsg = tableMsg + "you can not leave any gap between your companies";   
                }
                else{
                    tableMsg = "You have successfully submitted your application at time " + CurrentTime();
                }
                ptag.innerHTML = tableMsg; 
                }

            
            function CheckGap(array) {
                gapArray = Array();
                for (let index = 1; index < max_rank; index++) {
                    if (array[index] == undefined){
                        gapArray.push(index);
                    } 
                }
                return gapArray;
            }
            
            document.getElementById("clear").onclick = clearing;

            function clearing() {
                event.preventDefault();
                document.getElementById("tberror").innerHTML = "";
                max_rank = 0;
                ranks = Array(10);
                companies = Array();
                noofcompanies = 0;
                document.querySelector("table").innerHTML = initialempty;
                totalno.innerHTML = "Total Number of Companies Applied: " + noofcompanies;
                time.innerHTML = "Last Change Time: " + CurrentTime();
            }

})

