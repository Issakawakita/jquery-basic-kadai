// $(window).on("load",()=>{
//     console.log("イベント");
// });

$(window).on({
    "load":()=>{
        console.log("laodイベント発生");
    },
    "scroll":()=>{
        console.log("scrollイベント発生");
    },
});