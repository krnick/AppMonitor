Java.perform(function() {
    var runtime = Java.use("java.lang.Runtime");
    if (runtime) {
        runtime.exec.overload("java.lang.String").implementation = function() {
            console.log("call Runtime.exec");
            return this.exec.overload("java.lang.String").apply(this, arguments);
        };
    }
});