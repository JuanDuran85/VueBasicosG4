export const state = () => ({
    info: [
        {id: 1, titulo: "info post 1", contenido: "labore similique laboriosam"},
        {id: 2, titulo: "info post 2", contenido: "labore similique laboriosam"},
        {id: 3, titulo: "info post 3", contenido: "labore similique laboriosam"},
    ]
})

export const getters = {
    enviandoInfo(state){
        return state.info;
    }
}