import loadjs from "loadjs";

export default function Script(){
    return(
        loadjs.reset(),
        loadjs("./assets/vendor/jquery/jquery.min.js",{async:true}),
        loadjs("./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",{async:true}),
        loadjs("./assets/vendor/jquery-easing/jquery.easing.min.js",{async:true}),
        loadjs("./assets/js/ruang-admin.min.js",{async:true}),
        loadjs("./assets/js/ruang-admin.min.js",{async:true}),
        loadjs("./assets/js/demo/chart-area-demo.js",{async:true})



    )
}