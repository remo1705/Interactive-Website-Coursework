var flag = 0;
function f2() {
    var source1 = document.getElementById("src1");
    var source2 = document.getElementById("src2");

    if (flag === 0) {
        source1.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video2.mp4");
        source2.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video2.webm");
        flag = 1;
    } else if (flag === 1) {
        source1.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video1.mp4");
        source2.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video1.webm");
        flag = 0;
    }

    video.load();
    video.play();
}


document.addEventListener('DOMContentLoaded', function(){
    const msgs = [
        "Join our company in Technology Zone of Visionary Innovation Hub for unparalleled opportunities in cutting-edge tech development! 15 QUOTAS LEFT!",
        "Become part of the Innovation Zone at Visionary Innovation Hub, where creativity meets research for groundbreaking solutions! 10 QUOTAS LEFT!",
        "Discover the Eco Zone at Visionary Innovation Hub, dedicated to sustainable practices and technologies for a greener future! 12 QUOTAS LEFT!"
        ];  // array containing messages to be displayed
    
    
        window.onload = f; // random message displayed on load
        setInterval(msgloop, 3000); // change and displaying a different message after 3 seconds
    
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    
        heading = document.querySelector(".block2 > #d8 > h3"); // Selecting heading

        function f() {
        Randommsg = getRandomInt(msgs.length);
        heading.innerHTML = msgs[Randommsg];
    }

    function msgloop() {
        let indexofcurrent = Randommsg;
        indexofnewmsg = indexofcurrent + 1;
        if (indexofnewmsg >= msgs.length) {
            indexofnewmsg = 0;
        }
        heading.innerHTML = msgs[indexofnewmsg];
        Randommsg = indexofnewmsg; // Update the current message index
    }
})
