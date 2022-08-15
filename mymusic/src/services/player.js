import request from './request';

export function getSongDetail(ids) {
  return request({
    url: "/song",
    params: {
      ids
    }
  })
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}