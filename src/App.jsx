import { useState } from 'react'

export default function App(){

    const [screenValue, setScreenValue]=useState('')
    const [result, setResult]=useState(0)
    const [count, setCount]=useState(0)
    const [operated, setOperated]=useState(false)
    
    const Screen=(value, res)=>{
        return(
            <div style={cssScreen}>
                <span style={cssScreenOper}>{value}</span>
                <span style={cssScreenRes}>{res}</span>
            </div>
            
        )
    }
    const Btn=(label, onClick)=>{
        return(
            <button style={cssBtn} onClick={onClick}>{label}</button>
        )
    }


    //funçoes
    const addDigitScreen=(d)=>{
        if((d=='+' ||d=='-' ||d=='*' ||d=='/') && operated){
            console.log("+-*/")
            setOperated(false)
            setScreenValue(result+d)
            return
        }
        if(operated){
            setScreenValue(d)
            setOperated(false)
        }
        const typedValue=screenValue+d
        setScreenValue(typedValue)
    }

    const clearMemory=()=>{
        setOperated(false)
        setScreenValue('')
        setResult(0)
        setCount(0)
        return
    }
    const Operation=(oper)=>{
        if(oper=='bs'){
            let svalue = screenValue
            svalue=svalue.substring(0,(svalue.length-1))
            setScreenValue(svalue)
            setOperated(false)
            return

        }
        try{
            const r = eval(screenValue) //avalia o conteudo de uma expressao e calcula 
            setCount(r)
            setResult(r)
            setOperated(true)
        }catch{
            setResult('ERRO')
        }

    }
//css
    const cssContainer={
        display:'flex',
        margin:'auto',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column',
        width:300,
        border:'1px solid #000'
    }
    const cssButtons={
        flexDirection:'row',
        flexWrap:'wrap'
    }
    const cssScreen={
        display:'flex',
        paddingLeft:20,
        paddingRight: 20,
        justifyContent: 'end',
        alignItems:'flex-end',
        backgroundColor: '#444',
        flexDirection: 'column',
        flexWrap:'wrap',
        window:260
    }
    const cssScreenOper={
        fontSize:25,
        color:'#fff',
        height:20,
    }
    const cssScreenRes={
        width:260,
        fontSize:50,
        color:'#fff',
        margin:'auto'
    }
    const cssBtn={
        fontSize:30,
        height:75,
        width:75,
        padding:20,
        backgroundColor: '#000',
        color:'#fff',
        borderColor:'#000',
        textAlign:'center',
        outline:'none'
    }
    return(
        <>
            <div style={cssContainer}>
                <h3>Calculadora Matemática simples</h3>
                {Screen(screenValue,result)}
                <div style={cssButtons}>
                    {Btn('AC', clearMemory)}
                    {Btn('(',()=>addDigitScreen('('))}
                    {Btn(')',()=>addDigitScreen(')'))}
                    {Btn('/',()=>addDigitScreen('/'))}
                    {Btn('7',()=>addDigitScreen('7'))}
                    {Btn('8',()=>addDigitScreen('8'))}
                    {Btn('9',()=>addDigitScreen('9'))}
                    {Btn('*',()=>addDigitScreen('*'))}
                    {Btn('4',()=>addDigitScreen('4'))}
                    {Btn('5',()=>addDigitScreen('5'))}
                    {Btn('6',()=>addDigitScreen('6'))}
                    {Btn('-',()=>addDigitScreen('-'))}
                    {Btn('1',()=>addDigitScreen('1'))}
                    {Btn('2',()=>addDigitScreen('2'))}
                    {Btn('3',()=>addDigitScreen('3'))}
                    {Btn('+',()=>addDigitScreen('+'))}
                    {Btn('0',()=>addDigitScreen('0'))}
                    {Btn('.',()=>addDigitScreen('.'))}
                    {Btn('<-',()=>Operation('bs'))}
                    {Btn('=',()=>Operation('='))}
                </div>
            </div>
        </>
    )
}
