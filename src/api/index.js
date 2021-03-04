const urlPrefix = "http://192.168.0.106:3000/mock/13"
const endPoints = {
    "electricity_kpi":"/api/electricity/kpi",
    "electricity_health":"/api/electricity/health",
    'auth_roles':'/api/auth/roles',
    'overview':'/api/overview',
    'users': '/api/users'
}

class Urls {
    get = key => {
        return urlPrefix + endPoints[key]
    }
}

const urlsIns = new Urls()

export {urlsIns as Urls}
