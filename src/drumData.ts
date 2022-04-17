import { useId } from "react";

function Data (){
    const drumPad = [
        {
            id: useId(),
            key: 'Q',
            keyCode: 81,
            drum : [
                {
                    name: 'Heater 1',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                }
            ],
            piano: [
                {
                    name: 'Chord 1',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'W',
            keyCode: 87,
            drum : [
                {
                    name: 'Heater 2',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                }
            ],
            piano: [
                {
                    name: 'Chord 2',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'E',
            keyCode: 69,
            drum : [
                {
                    name: 'Heater 3',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                }
            ],
            piano: [
                {
                    name: 'Chord 3',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'A',
            keyCode: 65,
            drum : [
                {
                    name: 'Heater 4',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                }
            ],
            piano: [
                {
                    name: 'Shaker',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'S',
            keyCode: 83,
            drum : [
                {
                    name: 'Clap',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                }
            ],
            piano: [
                {
                    name: 'Open HH',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'D',
            keyCode: 68,
            drum : [
                {
                    name: 'Open HH',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                }
            ],
            piano: [
                {
                    name: 'Closed HH',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'Z',
            keyCode: 90,
            drum : [
                {
                    name: 'Kick n\' Hat',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                }
            ],
            piano: [
                {
                    name: 'Punchy Kick',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'X',
            keyCode: 88,
            drum : [
                {
                    name: 'Kick',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                }
            ],
            piano: [
                {
                    name: 'Side Stick',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
                }
            ]
        },
        {
            id: useId(),
            key: 'C',
            keyCode: 67,
            drum : [
                {
                    name: 'Closed HH',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                }
            ],
            piano: [
                {
                    name: 'Snare',
                    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
                }
            ]
        },
    ]

    return drumPad
}

export default Data