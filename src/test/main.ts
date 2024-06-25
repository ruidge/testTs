// import {  } from "./m2";
import { fun_m1 } from "./m2";

//即使import了,但是没调用fun_m1,模块中的代码也不会执行,运行时候才加载
fun_m1()
console.log("main")
