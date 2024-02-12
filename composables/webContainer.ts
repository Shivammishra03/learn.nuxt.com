import { WebContainer } from "@webcontainer/api";

let _wecontainerInstance: WebContainer

export async function useWebContainer() {
    if(!_wecontainerInstance) {
        _wecontainerInstance = await WebContainer.boot()
        return _wecontainerInstance
    }
}