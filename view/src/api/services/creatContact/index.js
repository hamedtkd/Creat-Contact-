import { BASE_INSTANCE } from "@/api/constant"

export const contactsServices = (data) => {
    return BASE_INSTANCE.post('/contacts',data)
}