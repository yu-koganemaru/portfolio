export const profiles:{
  NAME: string
  BIRTH: Date
  AGE: () => number
  SEX: string
  COUNTRY: string
  LANG: string
} = {
  NAME: 'YU KOGANEMARU',
  BIRTH: new Date('1998-06-10'),
  AGE: () => {
    // BIRTHから年齢を算出して返す。
    const today = new Date()
    const thisYearsBirthday = new Date(today.getFullYear(), profiles.BIRTH.getMonth(), profiles.BIRTH.getDate())
    const age = today.getFullYear() - profiles.BIRTH.getFullYear()

    return (today.getTime() < thisYearsBirthday.getTime()) ? age - 1 : age
  },
  SEX: 'MALE',
  COUNTRY: 'JAPAN',
  LANG: 'JP, EN (Easy)'
}
