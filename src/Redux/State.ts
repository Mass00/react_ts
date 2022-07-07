export interface IUsersData {
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

interface dialogsPageData {
    dialogs: IDialogs[]
}

export interface IPosts {
    id: number,
    text: string,
    userId: number,
    date: Date
}

interface IProfileData {
    posts: IPosts[]
}

export interface IState {
    usersData: IUsersData[],
    dialogData: dialogsPageData,
    sideBarMenu: ISideBarMenu[],
    profileData: IProfileData,
}

export interface IActionAddPost {
    type: 'ACTION_ADD_POST',
    text: string,
    userId: number
}

export interface IActionRemovePost {
    type: 'ACTION_REMOVE_POST',
    id: number
}


export interface IStore {
    _state: IState,
    addPost: (text: string, userId: number) => void,
    removePost: (id: number) => void,
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: IActionAddPost | IActionRemovePost) => void

    getState(): IState
}

export let store: IStore = {
    _state: {
        usersData: [
            {
                id: 1,
                name: "Gordon Freeman"
            }, {
                id: 2,
                name: "Chat Bot"
            }],
        dialogData: {
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
                }]
        },
        sideBarMenu: [
            {name: 'Мой профиль', link: 'profile', ico: 1},
            {name: 'Сообщения', link: 'dialogs', ico: 2}
        ],
        profileData: {
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
    },
    addPost(text: string, userId: number) {
        this._state.profileData.posts.push({id: Date.now(), text, userId, date: new Date()})
        this._callSubscriber()
    },
    removePost(id: number) {
        this._state.profileData.posts = [...this._state.profileData.posts].filter(item => item.id !== id)
        this._callSubscriber()
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if(action.type === 'ACTION_ADD_POST'){
            this._state.profileData.posts.push({id: Date.now(), text: action.text, userId: action.userId, date: new Date()})
            this._callSubscriber()
        }
        if(action.type === 'ACTION_REMOVE_POST'){
            this._state.profileData.posts = [...this._state.profileData.posts].filter(item => item.id !== action.id)
            this._callSubscriber()
        }
    }
}
