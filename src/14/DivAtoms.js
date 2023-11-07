import { atom, selector } from "recoil";


export const DivAtoms = atom({
    key: "DivAtom",
    default: 0
});

export const DivAtoms2 = selector({
    key: "DivAtom2",
    get: ({get}) => {
        return get(DivAtoms)*2
    }
})
