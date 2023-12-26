import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('menu/index');
}
function getById(id)
{
    return httpAxios.get(`menu/show/${id}`);
}
function create(data)
{
    return httpAxios.post('menu/store', data);
}
function update(data,id)
{
    return httpAxios.post(`menu/update/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`menu/destroy/${id}`);
}
function getByParentId(position, parent_id)
{
    return httpAxios.get(`menu_list/${position}/${parent_id}`);

}
const MenuService = {
    getByParentId:getByParentId,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}

export default MenuService;