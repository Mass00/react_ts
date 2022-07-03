

export interface IUser {
    id: number,
    name: string
}

export interface ISideBarMenu {
    name: string,
    link: string,
    ico: number
}

export interface IDialog {
    dialogId: number,
    owner: boolean,
    id: number,
    userId: number,
    text: string
}

export interface IState {
    users: IUser[],
    dialogs: IDialog[],
    sideBarMenu: ISideBarMenu[]
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
            owner: true,
            text: "Здраствуйте, что вы думаете о сегодняшнем дне?"
        }, {
            dialogId: 1,
            id: 2,
            userId: 2,
            owner: true,
            text: "Здраствуйте, моЯ твоЯ не понимать?"
        }, {
            dialogId: 2,
            id: 1,
            userId: 1,
            owner: true,
            text: "Ololotrololol"
        }],
    sideBarMenu: [
        {name: 'Мой профиль', link: 'profile', ico: 1},
        {name: 'Сообщения', link: 'dialogs', ico: 2}
    ]
}