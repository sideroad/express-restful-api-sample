/**
 * @api {get} /groups Get collection
 * @apiGroup Group
 * 
 * @apiSuccess {Number} offset
 * @apiSuccess {Number} limit
 * @apiSuccess {Number} size
 * @apiSuccess {String} first
 * @apiSuccess {String} last
 * @apiSuccess {Object[]} items Array of Group instance

 */

/**
 * @api {post} /groups Create instance
 * @apiGroup Group
 * @apiParam {String} name Group name
 * 
 * @apiParam {Object} owner Members id

 * 
 */

/**
 * @api {get} /groups/:id Get instance
 * @apiGroup Group
 * 
 * @apiSuccess {String} id 
 * @apiSuccess {String} createdAt 
 * @apiSuccess {String} updatedAt 
 * @apiSuccess {String} name Group name
 * @apiSuccess {Object} members Members id
 * @apiSuccess {Object} owner Members id

 */

/**
 * @api {get} /groups/:id/members Get members collection
 * @apiGroup Group
 * 
 * @apiSuccess {Number} offset
 * @apiSuccess {Number} limit
 * @apiSuccess {Number} size
 * @apiSuccess {String} first
 * @apiSuccess {String} last
 * @apiSuccess {Object[]} items Array of Group instance

 */

/**
 * @api {post} /groups/:id Update instance
 * @apiGroup Group
 * @apiParam {String} name Group name
 * 
 * @apiParam {Object} owner Members id

 * 
 */

/**
 * @api {delete} /groups Delete collection
 * @apiGroup Group
 * 
 * 
 */

/**
 * @api {delete} /groups/:id Delete instance
 * @apiGroup Group
 * 
 * 
 */

/**
 * @api {get} /members Get collection
 * @apiGroup Member
 * 
 * @apiSuccess {Number} offset
 * @apiSuccess {Number} limit
 * @apiSuccess {Number} size
 * @apiSuccess {String} first
 * @apiSuccess {String} last
 * @apiSuccess {Object[]} items Array of Member instance

 */

/**
 * @api {post} /members Create instance
 * @apiGroup Member
 * @apiParam {String} name Member name
 * @apiParam {String} group 
 * 

 * 
 */

/**
 * @api {get} /members/:id Get instance
 * @apiGroup Member
 * 
 * @apiSuccess {String} id 
 * @apiSuccess {String} createdAt 
 * @apiSuccess {String} updatedAt 
 * @apiSuccess {String} name Member name
 * @apiSuccess {String} group 
 * @apiSuccess {Object} absents linking of absent

 */

/**
 * @api {get} /members/:id/absents Get absents collection
 * @apiGroup Member
 * 
 * @apiSuccess {Number} offset
 * @apiSuccess {Number} limit
 * @apiSuccess {Number} size
 * @apiSuccess {String} first
 * @apiSuccess {String} last
 * @apiSuccess {Object[]} items Array of Member instance

 */

/**
 * @api {post} /members/:id Update instance
 * @apiGroup Member
 * @apiParam {String} name Member name
 * @apiParam {String} group 
 * 

 * 
 */

/**
 * @api {delete} /members Delete collection
 * @apiGroup Member
 * 
 * 
 */

/**
 * @api {delete} /members/:id Delete instance
 * @apiGroup Member
 * 
 * 
 */

/**
 * @api {get} /stats Get collection
 * @apiGroup Stat
 * 
 * @apiSuccess {Number} offset
 * @apiSuccess {Number} limit
 * @apiSuccess {Number} size
 * @apiSuccess {String} first
 * @apiSuccess {String} last
 * @apiSuccess {Object[]} items Array of Stat instance

 */

/**
 * @api {post} /stats Create instance
 * @apiGroup Stat
 * @apiParam {String} key 
 * @apiParam {String} text 

 * 
 */

/**
 * @api {get} /stats/:id Get instance
 * @apiGroup Stat
 * 
 * @apiSuccess {String} id 
 * @apiSuccess {String} createdAt 
 * @apiSuccess {String} updatedAt 
 * @apiSuccess {String} key 
 * @apiSuccess {String} text 

 */

/**
 * @api {post} /stats/:id Update instance
 * @apiGroup Stat
 * @apiParam {String} key 
 * @apiParam {String} text 

 * 
 */

/**
 * @api {delete} /stats Delete collection
 * @apiGroup Stat
 * 
 * 
 */

/**
 * @api {delete} /stats/:id Delete instance
 * @apiGroup Stat
 * 
 * 
 */

/**
 * @api {get} /absents Get collection
 * @apiGroup Absent
 * 
 * @apiSuccess {Number} offset
 * @apiSuccess {Number} limit
 * @apiSuccess {Number} size
 * @apiSuccess {String} first
 * @apiSuccess {String} last
 * @apiSuccess {Object[]} items Array of Absent instance

 */

/**
 * @api {post} /absents Create instance
 * @apiGroup Absent
 * @apiParam {String} member 
 * @apiParam {String} date 
 * @apiParam {Object} stat stat id
 * @apiParam {String} start 
 * @apiParam {String} end 
 * @apiParam {String} reason 

 * 
 */

/**
 * @api {get} /absents/:id Get instance
 * @apiGroup Absent
 * 
 * @apiSuccess {String} id 
 * @apiSuccess {String} createdAt 
 * @apiSuccess {String} updatedAt 
 * @apiSuccess {String} member 
 * @apiSuccess {String} date 
 * @apiSuccess {Object} stat linking of stat
 * @apiSuccess {String} start 
 * @apiSuccess {String} end 
 * @apiSuccess {String} reason 

 */

/**
 * @api {post} /absents/:id Update instance
 * @apiGroup Absent
 * @apiParam {String} member 
 * @apiParam {String} date 
 * @apiParam {Object} stat stat id
 * @apiParam {String} start 
 * @apiParam {String} end 
 * @apiParam {String} reason 

 * 
 */

/**
 * @api {delete} /absents Delete collection
 * @apiGroup Absent
 * 
 * 
 */

/**
 * @api {delete} /absents/:id Delete instance
 * @apiGroup Absent
 * 
 * 
 */
