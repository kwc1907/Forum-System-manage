import request from '@/utils/request'

export function getTagechar() {
  return request({
    url: '/manageTag/echar',
    method: 'get'
  })
}

export function getTag(page, size) {
  return request({
    url: '/manageTag/getAll',
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}
export function deleteOne(id) {
  return request({
    url: `/manageTag/deleteOne/${id}`,
    method: 'delete',
  })
}