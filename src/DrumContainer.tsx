import React, { useState } from 'react'
//import Drum from './img/drum.png'
import Data from './drumData'



function DrumContainer() {
    const [selectedKey, setSelectedKey] = useState()
    const [instrument, setInstrument] = useState('drum')
    const [power, setPower] = useState(true)
    const [focus, setFocus] = useState<string | null>()


    const drumPad = Data()

    interface Example {
        name: any,
        audio: string
    }
    interface Data {
        drum: Example[],
        id: string,
        key: string,
        keyCode: number,
        piano: Example[]
    }

    
    const playSound = (instrument: string, power: boolean, selected: Data) =>{
        let audio
        if(instrument === 'drum' && power !== false){
            setSelectedKey(selected.drum[0].name)
            // setAudio(selected.drum[0].audio)
            audio = new Audio(selected.drum[0].audio)
            audio.currentTime = 0
            audio.play()
        }
        else if(instrument === 'piano' && power !== false){
            setSelectedKey(selected.piano[0].name)
            //setAudio(selected.piano[0].audio)
            audio = new Audio(selected.piano[0].audio)
            audio.currentTime = 0
            audio.play()
        }
    }

    const handlePadClick = (selected: Data) =>{
        setFocus(selected.key.toUpperCase())
        playSound(instrument, power, selected)
    }

    const toggleInstrument = () =>{
        instrument === 'drum' ? setInstrument('piano') : setInstrument('drum')
    }

    const togglePower = () =>{
        setPower(!power)
    }
    
    document.onkeydown = function (e) {
        const filtered = drumPad.filter(drum => drum.key.toLowerCase() === e.key)
        setFocus(filtered[0].key.toUpperCase())
        playSound(instrument, power, filtered[0])
    };

    

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-gray">
                <div>
                    <div className="flex justify-between my-5">
                        <label  className="switch">
                            <input type="checkbox" />
                            <span onClick={toggleInstrument} className="slider"></span>
                        </label>
                        <label className="switchtwo">
                            <input type="checkbox" />
                            <span onClick={togglePower} className="slidertwo"></span>
                        </label>
                    </div>
                    <div className='container bg-white shadow-2xl w-96 px-4 pb-6 rounded-lg'>
                        {/* <div className="w-20 h-20">
                            <img src={Drum} alt="drum" className='object-cover w-full'  />
                        </div> */}
                        <div className="flex justify-between">
                            <input type="text" disabled defaultValue={selectedKey} className='border rounded-lg w-full py-3 my-5 text-center' />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                drumPad.map(pad => {
                                    return  <button key={pad.id} onClick={()=>handlePadClick(pad)} className={`${focus === pad.key ? 'shadow-2xl bg-slate-200 ' : null } drum-pad shadow outline-none text-center py-6 rounded-md`}>
                                                { pad.key }
                                            </button>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DrumContainer