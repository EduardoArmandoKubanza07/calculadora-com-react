import { useRef , useEffect } from "react";
import { Container , Display , Buttons } from "./style";

export function Calculator() {

    const zeroBtn = useRef(null);
    const equalBtn = useRef(null);
    const display = useRef('');

    useEffect( ()=>{
        zeroBtn.current.style.width = "47.5%";
        zeroBtn.current.style.marginRight = ".7rem";

        equalBtn.current.style.height = "7rem";
        equalBtn.current.style.marginBottom = "-4.2rem";
    }, []);

    function insertDatas( data) {
        let currentData = display.current.innerText;
        display.current.innerText =currentData+data;
    }

    function clearAllDatas(){
        display.current.innerText = "";
    }

    function clearDatas() {
        let datas = display.current.innerText;
        
        display.current.innerText = datas.substring(0, datas.length-1);
    }

    function calculate() {
        let datas = display.current.innerText;

        if( datas) {
            display.current.innerText = eval(datas);
        }
    }

    return(
        <Container>
            <Display ref={display}>
            </Display>
            <Buttons>
                <div>
                    <button onClick={clearAllDatas} > C </button>
                    <button onClick={clearDatas} > x </button>
                    <button onClick={()=> insertDatas("/")}> / </button>
                    <button onClick={()=> insertDatas("*")} > * </button>
                </div>
                <div>
                    <button onClick={()=> insertDatas("7")} > 7 </button>
                    <button onClick={()=> insertDatas("8")} > 8 </button>
                    <button onClick={()=> insertDatas("9")} > 9 </button>
                    <button onClick={()=> insertDatas("-")} > - </button>
                </div>
                <div>
                    <button onClick={()=> insertDatas("4")} > 4 </button>
                    <button onClick={()=> insertDatas("5")} > 5 </button>
                    <button onClick={()=> insertDatas("6")} > 6 </button>
                    <button onClick={()=> insertDatas("+")} > + </button>
                </div>
                <div>
                    <button onClick={()=> insertDatas("1")} > 1 </button>
                    <button onClick={()=> insertDatas("2")} > 2 </button>
                    <button onClick={()=> insertDatas("3")}> 3 </button>
                    <button ref={equalBtn} onClick={calculate} > = </button>
                </div>
                <div>
                    <button ref={zeroBtn} onClick={()=> insertDatas("0")} > 0 </button>
                    <button onClick={()=> insertDatas(".")} > . </button>
                </div>
            </Buttons>
        </Container>
    )

} 