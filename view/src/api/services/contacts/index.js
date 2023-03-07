import { BASE_INSTANCE } from "@/api/constant"

export const getContactsServices = (data) => {
    return BASE_INSTANCE.post('/contact',{...data})
}
