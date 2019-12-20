const { prefix, apiEndpoint } = window.CONFIG
export default {
  name: 'mindmap',
  store: {
    mindMapList: {}
  },
  actions: {
    getMindMapList: {
      // url: `${apiEndpoint}/jsonapi/form_mindmap`,
      url: `${prefix}/api/proxy/mindmap/jsonapi/form_mindmap`
    },
    getMindMap: {
      // url: `${apiEndpoint}/jsonapi/form_mindmap/:id`,
      url: `${prefix}/api/proxy/mindmap/jsonapi/form_mindmap/:id`
    },
    createMindMap: {
      // url: `${apiEndpoint}/jsonapi/form_mindmap`,
      url: `${prefix}/api/proxy/mindmap/jsonapi/form_mindmap`,
      method: 'POST'
    },
    deleteMindMap: {
      // url: `${apiEndpoint}/jsonapi/form_mindmap/:id`,
      url: `${prefix}/api/proxy/mindmap/jsonapi/form_mindmap/:id`,
      method: 'DELETE'
    },
    updateMindMap: {
      // url: `${apiEndpoint}/jsonapi/form_mindmap/:id`,
      url: `${prefix}/api/proxy/mindmap/jsonapi/form_mindmap/:id`,
      method: 'PATCH'
    },
    dingTalk: {
      url: `${prefix}/api/dingTalk`,
      method: 'POST'
    }

  }
}
