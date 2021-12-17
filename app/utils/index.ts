export enum MetaType {
    UPPERCASE,
    LOWERCASE,
    NUMBER,
    SPECIAL,
}

export interface PassMeta {
    label: string
    value: MetaType
    data: string
}
// const SpecialCharacters = '!@#$%^&*'

export const metaData: PassMeta[] = [
    {
        label: 'uppercase letter',
        value: MetaType.UPPERCASE,
        data: 'ABCDEFGHIGJLMNOPQRETUVWXYZ',
    },
    {
        label: 'lowercase letter',
        value: MetaType.LOWERCASE,
        data: 'abcdefghigjlmnopqretuvwxyz',
    },
    {
        label: 'number',
        value: MetaType.NUMBER,
        data: '1234567890',
    },
    // {
    //     label: `Special characters( ${SpecialCharacters} )`,
    //     value: MetaType.SPECIAL,
    //     data: SpecialCharacters,
    // },
]


export function generatePass(mates: MetaType[], n = 10, extraMate = '') {
    let meta = metaData.filter(item => mates.includes(item.value)).map(item => item.data).join('')
    if (mates.includes(MetaType.SPECIAL)) {
        meta += extraMate
    }
    const l = meta.length
    let pass = ''
    if (l > 0 && n > 0) {
        for (let i = 0; i < n; i++) {
            const index = randomInt(l)
            pass += meta[index]
        }
        return pass
    } else {
        return pass
    }
}

/**
 * @param max
 * @param min
 * @returns min <= n < max
 */
export function randomInt(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min
}
