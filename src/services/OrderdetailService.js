import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('orderdetail/index');
}
function getById(id)
{
    return httpAxios.get(`orderdetail/show/${id}`);
}
function create(data)
{
    return httpAxios.post('orderdetail/store', data);
}
function update(data,id)
{
    return httpAxios.post(`orderdetail/update/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`orderdetail/destroy/${id}`);
}
const OrderdetailService = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}

export default OrderdetailService;