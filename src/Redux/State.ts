export interface IUsers {
    id: number,
    name: string
}
export interface ISideBarMenu {
    name: string,
    link: string,
    ico: number
}
export interface IDialogs {
    dialogId: number,
    id: number,
    userId: number,
    text: string
}
export interface IPosts {
    id: number,
    text: string,
    userId: number,
    date: Date
}
export interface IState {
    users: IUsers[],
    dialogs: IDialogs[],
    sideBarMenu: ISideBarMenu[],
    posts: IPosts[]
}

let callObserver:() => void = () => {
    console.log('rerender')
}
export const observer = (callback: () => void) => {
    callObserver = callback
}

export let state: IState = {
    users: [
        {
            id: 1,
            name: "Gordon Freeman"
        }, {
            id: 2,
            name: "Chat Bot"
        }],
    dialogs: [
        {
            dialogId: 1,
            id: 1,
            userId: 1,
            text: "Здраствуйте, что вы думаете о сегодняшнем дне?"
        }, {
            dialogId: 1,
            id: 2,
            userId: 2,
            text: "Здраствуйте, моЯ твоЯ не понимать?"
        }, {
            dialogId: 1,
            id: 3,
            userId: 1,
            text: "Ты, чё Пёс?"
        }, {
            dialogId: 2,
            id: 1,
            userId: 1,
            text: "Ololotrololol"
        }, {
            dialogId: 2,
            id: 2,
            userId: 2,
            text: "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль."
        }, {
            dialogId: 3,
            id: 1,
            userId: 2,
            text: "Как ваши делишки?"
        }],
    sideBarMenu: [
        {name: 'Мой профиль', link: 'profile', ico: 1},
        {name: 'Сообщения', link: 'dialogs', ico: 2}
    ],
    posts: [
        {
            id: 1,
            text: 'Первый комментаpий. Жили были, и дружили. Кто его знает?',
            userId: 1,
            date: new Date()
        }, {
            id: 2,
            text: 'Второй комментаpий. Жили были, и дружили. Кто его знает?',
            userId: 1,
            date: new Date()
        }]
}
export const handlerOnClickAddPost = (text: string, userId: number) => {
    state.posts.push({id: Date.now(), text, userId, date: new Date()})
    callObserver()
}
export const handlerOnClickRemovePost = (id: number) => {
    state.posts = [...state.posts.filter(item => item.id !== id)]
    callObserver()
}
