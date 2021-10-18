import request from '@/utils/request'

export function getBillboard(page, size) {
    return request({
      url: '/manageBillboard/getAll',
      method: 'get',
      params: {
        pageNo: page,
        size: size
      }
    })
  }
  export function deleteOne(id) {
    return request({
      url: `/manageBillboard/deleteOne/${id}`,
      method: 'delete',
    })
  }
  export function disableOne(id) {
    return request({
      url: `/manageBillboard/disableOne/${id}`,
      method: 'get',
    })
  }
  export function ableOne(id) {
    return request({
      url: `/manageBillboard/ableOne/${id}`,
      method: 'post',
    })
  }
  export function insertOne(data) {
    return request({
      url: `/manageBillboard/insertOne/${data}`,
      method: 'post',
    })
  }
