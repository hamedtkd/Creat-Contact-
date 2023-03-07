import { BASE_INSTANCE } from "../../constant"

export const loginServices = (data) => {
    return BASE_INSTANCE.post('/login',data).then()
}