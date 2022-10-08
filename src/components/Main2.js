import React, { useState } from 'react';
import './Main.css';

export default function Main(){
    const [calc,setCalc] = useState('');
    const [result,setResult] = useState('');
    const ops = ['/','%','*','-','+','.','^'];

    const updateCalc = value => {
        if((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))){
            return;
        }
        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if(calc == ''){
            return;
        }
        const value = calc.slice(0,-1);
        setCalc(value);
    }

    const reSet = () => {
        const value = '';
        setCalc(value);
        setResult(value);
    }

    return(
        <div className='grid-container'>
            <div className='item1'>
                Result
            </div>
            <div className='item2'>
                {result ? <span className='res'>({result})</span>:''}
                {calc || "0"}
            </div>
            <div className='item3'>
                <button className='buttonop' onClick={reSet}>AC</button>
            </div>
            <div className='item4'> 
                <button className='buttonop' onClick={deleteLast}>Del</button>
            </div>
            <div className='item5'> 
                <button className='buttonop' onClick={() => updateCalc('%')}>%</button>
            </div>
            <div className='item6'> 
                <button className='buttonop' onClick={() => updateCalc('/')}>/</button>
            </div>
            <div className='item7'> 
                <button className='buttonval' onClick={() => updateCalc('7')}>7</button>
            </div>
            <div className='item8'> 
                <button className='buttonval' onClick={() => updateCalc('8')}>8</button>
            </div>
            <div className='item9'> 
                <button className='buttonval' onClick={() => updateCalc('9')}>9</button>
            </div>
            <div className='item10'>
                <button className='buttonop' onClick={() => updateCalc('*')}>*</button>
            </div>
            <div className='item11'>
                <button className='buttonval' onClick={() => updateCalc('4')}>4</button>
            </div>
            <div className='item12'>
                <button className='buttonval' onClick={() => updateCalc('5')}>5</button>
            </div>
            <div className='item13'>
                <button className='buttonval' onClick={() => updateCalc('6')}>6</button>
            </div>
            <div className='item14'>
                <button className='buttonop' onClick={() => updateCalc('-')}>-</button>
            </div>
            <div className='item15'>
                <button className='buttonval' onClick={() => updateCalc('1')}>1</button>
            </div>
            <div className='item16'>
                <button className='buttonval' onClick={() => updateCalc('2')}>2</button>
            </div>
            <div className='item17'>
                <button className='buttonval' onClick={() => updateCalc('3')}>3</button>
            </div>
            <div className='item18'>
                <button className='buttonop' onClick={() => updateCalc('+')}>+</button>
            </div>
            <div className='item19'>
                <button className='buttonop' onClick={() => updateCalc('^')}>^</button>
            </div>
            <div className='item20'>
                <button className='buttonval' onClick={() => updateCalc('0')}>0</button>
            </div>
            <div className='item21'>
                <button className='buttonop' onClick={() => updateCalc('.')}>.</button>
            </div>
            <div className='item22'>
                <button className='buttonop' onClick={calculate}>=</button>
            </div>
        </div>
    )
}