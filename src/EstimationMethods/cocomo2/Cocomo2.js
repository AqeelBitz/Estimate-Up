import React, { useEffect } from 'react'
import "./cocomo2.css"

const Cocomo2 = () => {
    const medaBtn = document.getElementById('meda');
    const fpBtn = document.getElementById('fpBtn');

    let FP = 0;
    let correctFP = 0;

    useEffect(() => {
        if (fpBtn) {
            fpBtn.addEventListener('click', () => {
                FP = 0;
                correctFP = 0;
                let sumCoeffCorrComplexity = 0;
                for (let i = 1; i < 15; i++) {
                    let curr = +document.getElementById('fp' + i).value;
                    sumCoeffCorrComplexity += curr;
                }

                let EI = [[3, 3, 4], [3, 4, 6], [4, 6, 6]];
                let EO = [[4, 4, 5], [4, 5, 7], [5, 7, 7]];
                let ILF = [[7, 7, 10], [7, 10, 15], [10, 15, 15]];
                let EIF = [[5, 5, 7], [5, 7, 10], [7, 10, 10]];
                let EQ = [[3, 3, 4], [3, 4, 6], [4, 6, 6]];

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        FP += +document.getElementById('EI' + i + j).value * EI[i][j] +
                            +document.getElementById('EO' + i + j).value * EO[i][j] +
                            +document.getElementById('ILF' + i + j).value * ILF[i][j] +
                            +document.getElementById('EIF' + i + j).value * EIF[i][j] +
                            +document.getElementById('EQ' + i + j).value * EQ[i][j];
                    }
                }

                correctFP = FP * (0.65 + 0.01 * sumCoeffCorrComplexity);
                 let x1 = document.getElementById('fp')
                 let x2 = document.getElementById('ufp')
                 let x3 = document.getElementById('fi')
                 x1.style.backgroundColor = 'greeen'
                 x2.style.backgroundColor = 'greeen'
                 x3.style.backgroundColor = 'greeen'
                 

                document.getElementById('fp').innerHTML = 'Function points without compensation: ' + FP.toFixed(2);
                document.getElementById('ufp').innerHTML = 'Function points with correction: ' + correctFP.toFixed(2);
                document.getElementById('fi').innerHTML = 'Correction factor:' + sumCoeffCorrComplexity.toFixed(2);
            });

        }
        if (medaBtn) {
            medaBtn.addEventListener('click', () => {
                const p = countP();
                document.getElementById('p').innerHTML = 'P = ' + p;

                const eArch = counteArch(p);
                let procRUSE = +document.getElementById('rusePr').value;
                let PROD = document.getElementById('exp');
                PROD = PROD.options[PROD.selectedIndex].value;
                let screenForms = +document.getElementById('sS').value +
                    +document.getElementById('mS').value * 2 +
                    +document.getElementById('hS').value * 3;
                let docs = +document.getElementById('sD').value * 2 +
                    +document.getElementById('mD').value * 5 +
                    +document.getElementById('hD').value * 8;
                let modules = +document.getElementById('mod').value * 10;

                const FPper = FP / 100;
                const kLOC = FPper * 30 * 64 + FPper * 10 * 21 + FPper * 60 * 53;
                const size = screenForms + docs + modules;
                const MdpJob = (size * ((100 - procRUSE) / 100)) / PROD;
                const medaJob = 2.45 * eArch * Math.pow(kLOC / 1000, p);

                document.getElementById('jobResultMeda').innerHTML = 'Трудозатраты(чел/мес): ' + medaJob.toFixed(2);
                document.getElementById('timeResultMeda').innerHTML = 'Время(мес):' + (3.0 * Math.pow(medaJob, 0.33 + 0.2 * (p - 1.01))).toFixed(2);
                document.getElementById('jobResultMdp').innerHTML = 'Трудозатраты(чел/мес):' + MdpJob;
                document.getElementById('timeResultMdp').innerHTML = 'Время(мес):' + (3 * Math.pow(MdpJob, 0.33 + 0.2 * (p - 1.01))).toFixed(2);
            });
        }

    })

    function countP() {
        let prec = document.getElementById('prec');
        prec = +prec.options[prec.selectedIndex].value;
        let flex = document.getElementById('Flex');
        flex = +flex.options[flex.selectedIndex].value;
        let risk = document.getElementById('Risk');
        risk = +risk.options[risk.selectedIndex].value;
        let team = document.getElementById('team');
        team = +team.options[team.selectedIndex].value;
        let pmat = document.getElementById('pmat');
        pmat = +pmat.options[pmat.selectedIndex].value;

        return ((prec + flex + risk + team + pmat) / 100 + 1.01).toFixed(2);
    }

    function counteArch(p) {
        let PERS = document.getElementById('PERS');
        PERS = +PERS.options[PERS.selectedIndex].value;
        let RCPX = document.getElementById('RCPX');
        RCPX = +RCPX.options[RCPX.selectedIndex].value;
        let RUSE = document.getElementById('RUSE');
        RUSE = +RUSE.options[RUSE.selectedIndex].value;
        let PDIF = document.getElementById('PDIF');
        PDIF = +PDIF.options[PDIF.selectedIndex].value;
        let FCIL = document.getElementById('FCIL');
        FCIL = +FCIL.options[FCIL.selectedIndex].value;
        let SCED = document.getElementById('SCED');
        SCED = +SCED.options[SCED.selectedIndex].value;
        let PREX = document.getElementById('PREX');
        PREX = +PREX.options[PREX.selectedIndex].value;

        return (PERS * RCPX * RUSE * PDIF * FCIL * SCED * PREX).toFixed(2);
    }
    return (
        <div>
            <h1>COCOMO II</h1>
            <div className="container">
                <div className="row">
                    <div className="col functionalPoint">
                        <h2 style={{backgroundColor:'green',borderRadius:'7px'}}>Function point method</h2>
                        <div className='flex-item' >
                            <label htmlFor="fp1">Data transmission</label>
                            <input id="fp1" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp2">Distributed data processing</label>
                            <input id="fp2" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp3">Performance</label>
                            <input id="fp3" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp4">Operating restrictions</label>
                            <input id="fp4" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp5">Transaction frequency</label>
                            <input id="fp5" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp6">Online data entry</label>
                            <input id="fp6" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp7">End User Efficiency</label>
                            <input id="fp7" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp8">Live update</label>
                            <input id="fp8" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp9">Complexity of processing</label>
                            <input id="fp9" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp10">Reusability</label>
                            <input id="fp10" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp11">Ease of installation</label>
                            <input id="fp11" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp12">Ease of operation</label>
                            <input id="fp12" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp13">No. of possible installations on various platforms</label>
                          
                            <input id="fp13" type="number" min="0" max="5" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp14">Ease of change</label>
                            <input id="fp14" type="number" min="0" max="5" /><br />
                        </div>
                        
                        <button type="submit" id="fpBtn" role="button" className="button-81" >Calculate</button>
                        <div style={{ padding:'5px', marginTop:'5px'}}>
                        <h4 id="fi"></h4>
                        <h4 id="ufp" ></h4>
                        <h4 id="fp" ></h4>
                        </div>

                    </div>
                    <div className="col leftColoumn">
                        <div className='leftColumnTable'>
                            <h4 style={{backgroundColor:'green',borderRadius:'7px'}}>External inputs EI</h4>
                            <table border="1" style={{ width: '30%', margin: "2px" }}>
                                <tr>
                                    <th></th>
                                    <th> 1-4 </th>
                                    <th> 5-15 </th>
                                    <th> &gt;15 </th>
                                </tr>
                                <tr>
                                    <td> 0-1</td>
                                    <td><input id="EI00" type="text" /></td>
                                    <td><input id="EI01" type="text" /></td>
                                    <td><input id="EI02" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> 2 </td>
                                    <td><input id="EI10" type="text" /></td>
                                    <td><input id="EI11" type="text" /></td>
                                    <td><input id="EI12" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> &gt;2 </td>
                                    <td><input id="EI20" type="text" /></td>
                                    <td><input id="EI21" type="text" /></td>
                                    <td><input id="EI22" type="text" /></td>
                                </tr>
                            </table>
                        </div>

                        <div className='leftColumnTable'>
                            <h4 style={{backgroundColor:'green',borderRadius:'7px'}}>External terminals EO</h4>
                            <table border="1">
                                <tr>
                                    <th></th>
                                    <th> 1-4 </th>
                                    <th> 5-19 </th>
                                    <th> &gt;19 </th>
                                </tr>
                                <tr>
                                    <td> 0-1</td>
                                    <td><input id="EO00" type="text" /></td>
                                    <td><input id="EO01" type="text" /></td>
                                    <td><input id="EO02" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> 2-3 </td>
                                    <td><input id="EO10" type="text" /></td>
                                    <td><input id="EO11" type="text" /></td>
                                    <td><input id="EO12" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> &gt;3 </td>
                                    <td><input id="EO20" type="text" /></td>
                                    <td><input id="EO21" type="text" /></td>
                                    <td><input id="EO22" type="text" /></td>
                                </tr>
                            </table>
                        </div>

                        <div className='leftColumnTable'>
                            <h4 style={{backgroundColor:'green',borderRadius:'7px'}}>ILF internal logical files</h4>
                            <table border="1">
                                <tr>
                                    <th></th>
                                    <th> 1-19 </th>
                                    <th> 20-50 </th>
                                    <th> &gt;50 </th>
                                </tr>
                                <tr>
                                    <td> 1</td>
                                    <td><input id="ILF00" type="text" /></td>
                                    <td><input id="ILF01" type="text" /></td>
                                    <td><input id="ILF02" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> 2-5 </td>
                                    <td><input id="ILF10" type="text" /></td>
                                    <td><input id="ILF11" type="text" /></td>
                                    <td><input id="ILF12" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> &gt;5 </td>
                                    <td><input id="ILF20" type="text" /></td>
                                    <td><input id="ILF21" type="text" /></td>
                                    <td><input id="ILF22" type="text" /></td>
                                </tr>
                            </table>
                        </div>

                        <div className='leftColumnTable'>
                            <h4 style={{backgroundColor:'green',borderRadius:'7px'}}>External Interface EIF Files</h4>
                            <table border="1">
                                <tr>
                                    <th></th>
                                    <th> 1-19 </th>
                                    <th> 20-50 </th>
                                    <th> &gt;50 </th>
                                </tr>
                                <tr>
                                    <td> 1</td>
                                    <td><input id="EIF00" type="text" /></td>
                                    <td><input id="EIF01" type="text" /></td>
                                    <td><input id="EIF02" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> 2-5 </td>
                                    <td><input id="EIF10" type="text" /></td>
                                    <td><input id="EIF11" type="text" /></td>
                                    <td><input id="EIF12" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> &gt;5 </td>
                                    <td><input id="EIF20" type="text" /></td>
                                    <td><input id="EIF21" type="text" /></td>
                                    <td><input id="EIF22" type="text" /></td>
                                </tr>
                            </table>
                        </div>

                        <div className='leftColumnTable'>
                            <h4 style={{backgroundColor:'green',borderRadius:'7px'}}>External EQ requests</h4>
                            <table border="1">
                                <tr>
                                    <th></th>
                                    <th> 1-4 </th>
                                    <th> 5-19 </th>
                                    <th> &gt;19 </th>
                                </tr>
                                <tr>
                                    <td> 0-1</td>
                                    <td><input id="EQ00" type="text" /></td>
                                    <td><input id="EQ01" type="text" /></td>
                                    <td><input id="EQ02" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> 2-3 </td>
                                    <td><input id="EQ10" type="text" /></td>
                                    <td><input id="EQ11" type="text" /></td>
                                    <td><input id="EQ12" type="text" /></td>
                                </tr>
                                <tr>
                                    <td> &gt;3 </td>
                                    <td><input id="EQ20" type="text" /></td>
                                    <td><input id="EQ21" type="text" /></td>
                                    <td><input id="EQ22" type="text" /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <hr />
                <hr />
                <div className="row">
                    <div className="col">
                        <h2 style={{backgroundColor:'green',borderRadius:'7px'}}>Factors affecting the exponent in the model</h2>
                        <label htmlFor="prec">Novelty (PREC)</label>
                        <select id="prec">
                            <option value="6.2">Complete absence of precedents, completely unpredictable project</option>
                            <option value="4.96">Почти полное отсутсвие прецедентов, в значительной мере непредсказуемый проект</option>
                            <option value="3.72">Наличие некоторого количества прецедентов</option>
                            <option value="2.48">Общее знакомство с проектом</option>
                            <option value="1.24">Значительное знакомство с проектом</option>
                            <option value="0">Полное знакомство с проектом</option>
                        </select><br />
                        <label htmlFor="Flex">Гибкость разработки (FLEX)</label>
                        <select id="Flex">
                            <option value="5.07">Точный, строгий процесс разработки</option>
                            <option value="4.05">Случайные послабления в процессе</option>
                            <option value="3.04">Некоторые послабления в процессе</option>
                            <option value="2.03">Большей частью согласованный процесс</option>
                            <option value="1.01">Некоторое согласование процесса</option>
                            <option value="0">Заказчик определил только общие цели</option>
                        </select><br />
                        <label htmlFor="Risk">Разрешение рисков в архитектуре системы (RESL)</label>
                        <select id="Risk">
                            <option value="7">Малое (20%)</option>
                            <option value="5.65">Некоторое (40%)</option>
                            <option value="4.24">Частое (60%)</option>
                            <option value="2.83">В целом (75%)</option>
                            <option value="1.41">Почти полное (90%)</option>
                            <option value="0">Полное (100%)</option>
                        </select><br />
                        <label htmlFor="team">Сплоченность команды (TEAM)</label>
                        <select id="team">
                            <option value="5.48">Сильно затрудненное взаимодействие</option>
                            <option value="4.38">Несколько затрудненное взаимодействие</option>
                            <option value="3.29">Некоторая согласованность</option>
                            <option value="2.19">Повышенная согласованность</option>
                            <option value="1.1">Высокая согласованность</option>
                            <option value="0">Взаимодействие как в едином целом</option>
                        </select><br />
                        <label htmlFor="pmat">Уровень зрелости процесса разработки (PMAT)</label>
                        <select id="pmat">
                            <option value="7">Уровень 1 СММ</option>
                            <option value="6.24">Уровень 1+ СММ</option>
                            <option value="4.68">Уровень 2 СММ</option>
                            <option value="1.12">Уровень 3 СММ</option>
                            <option value="1.56">Уровень 7 СММ</option>
                            <option value="0">Уровень 5 СММ</option>
                        </select><br />
                        <h3 id="p"></h3>
                    </div>
                    <div className="col">
                        <h2 style={{backgroundColor:'green',borderRadius:'7px'}}>Модель ранней разработки архитектуры</h2>
                        <label htmlFor="PERS">PERS</label>
                        <select id="PERS">
                            <option value="1.62">Очень низкий</option>
                            <option value="1.26">Низкий</option>
                            <option value="1">Номинальный</option>
                            <option value="0.83">Высокий</option>
                            <option value="0.63">Очень высокий</option>
                            <option value="0.5">Сверхвысокий</option>
                        </select><br />
                        <label htmlFor="RCPX">RCPX</label>
                        <select id="RCPX">
                            <option value="0.6">Очень низкий</option>
                            <option value="0.83">Низкий</option>
                            <option value="1">Номинальный</option>
                            <option value="1.33">Высокий</option>
                            <option value="1.91">Очень высокий</option>
                            <option value="2.72">Сверхвысокий</option>
                        </select><br />
                        <label htmlFor="RUSE">RUSE</label>
                        <select id="RUSE">
                            <option value="0.95">Низкий</option>
                            <option value="1">Номинальный</option>
                            <option value="1.07">Высокий</option>
                            <option value="1.15">Очень высокий</option>
                            <option value="1.24">Сверхвысокий</option>
                        </select><br />
                        <label htmlFor="PDIF">PDIF</label>
                        <select id="PDIF">
                            <option value="0.87">Низкий</option>
                            <option value="1">Номинальный</option>
                            <option value="1.29">Высокий</option>
                            <option value="1.81">Очень высокий</option>
                            <option value="2.61">Сверхвысокий</option>
                        </select><br />
                        <label htmlFor="PREX">PREX</label>
                        <select id="PREX">
                            <option value="1.33">Очень низкий</option>
                            <option value="1.22">Низкий</option>
                            <option value="1">Номинальный</option>
                            <option value="0.87">Высокий</option>
                            <option value="0.74">Очень высокий</option>
                            <option value="0.62">Сверхвысокий</option>
                        </select><br />
                        <label htmlFor="FCIL">FCIL</label>
                        <select id="FCIL">
                            <option value="1.30">Очень низкий</option>
                            <option value="1.10">Низкий</option>
                            <option value="1">Номинальный</option>
                            <option value="0.87">Высокий</option>
                            <option value="0.73">Очень высокий</option>
                            <option value="0.62">Сверхвысокий</option>
                        </select><br />
                        <label htmlFor="SCED">SCED</label>
                        <select id="SCED">
                            <option value="1.43">Очень низкий</option>
                            <option value="1.14">Низкий</option>
                            <option value="1">Номинальный</option>
                            <option value="1">Высокий</option>
                            <option value="1">Очень высокий</option>
                        </select><br />
                        <button type="submit" id="meda">Рассчитать</button>
                        <h3 id="jobResultMeda"></h3>
                        <h3 id="timeResultMeda"></h3>
                    </div>
                    <div className="col">
                        <h2 style={{backgroundColor:'green',borderRadius:'7px'}}>Модель композиции изображения</h2>
                        <label htmlFor="rusePr">%RUSE:</label>
                        <input id="rusePr" type="text" placeholder="0" /><br />
                        <label htmlFor="exp">Опытность команды\разработчика</label>
                        <select id="exp">
                            <option value="4">Очень низкая</option>
                            <option value="7">Низкая</option>
                            <option value="13">Номинальная</option>
                            <option value="25">Высокая</option>
                            <option value="50">Очень высокая</option>
                        </select><br />
                        <h5>Экранные формы</h5>
                        <label htmlFor="sS">Простые</label>
                        <input id="sS" type="text" placeholder="0" /><br />
                        <label htmlFor="mS">Средние</label>
                        <input id="mS" type="text" placeholder="0" /><br />
                        <label htmlFor="hS">Сложные</label>
                        <input id="hS" type="text" placeholder="0" /><br />
                        <h5>Отчеты</h5>
                        <label htmlFor="sD">Простые</label>
                        <input id="sD" type="text" placeholder="0" /><br />
                        <label htmlFor="mD">Средние</label>
                        <input id="mD" type="text" placeholder="0" /><br />
                        <label htmlFor="hD">Сложные</label>
                        <input id="hD" type="text" placeholder="0" /><br />
                        <label htmlFor="mod">Модули на языках 3 поколения</label>
                        <input id="mod" type="text" placeholder="0" /><br />
                        <h3 id="jobResultMdp"></h3>
                        <h3 id="timeResultMdp"></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cocomo2
