
const taskModel = require('../model/taskModel.js')
const add = async (req, res) => {
    const { title, description, priority, status, deadline } = req.body
    await taskModel.create({
        username: '@cseabhisheks',
        title,
        description,
        priority,
        deadline,
        date: new Date(),
        status,
    }).catch((err) => {
        res.send("err is :", err)
    }).then(() => {
        res.json({ sucess: 'ok' })
    })
}


const fetch = async (req, res) => {
    const username = '@cseabhisheks'
    try {
        const tasks = await taskModel.find({ username: username })
        const lowPriority = await taskModel.find({ priority: 'low' })
        const mediumPriority = (await taskModel.find({ priority: 'medium' }))
        const highPriority = (await taskModel.find({ priority: 'high' }))
        const count = await taskModel.countDocuments()
        res.json({ task: tasks, stats: { count, lowPriority: lowPriority.length, mediumPriority: mediumPriority.length, highPriority: highPriority.length } })
    }
    catch (err) {
        res.send('err is: ', err)
    }
}
const remove = async (req, res) => {
    const username = '@cseabhisheks'
    const id = req.params.id
    try {
        const removedTask = await taskModel.findOneAndDelete({ $and: [{ username, _id: id }] })

        if (!removedTask) {
            return res.json({ mess: '❌ Task not found' });
        }
        res.json({ mess: 'removed' })
    }
    catch (err) {
        res.json({ mess: err })
    }

}
const edit = async (req, res) => {
    const username = '@cseabhisheks'
    const _id = req.body.id
      const { title, description, priority, status, deadline } = req.body
    await taskModel.updateOne({ username, _id },
        {
            $set: {
                username: '@cseabhisheks',
                title,
                description,
                priority,
                deadline,
                date: new Date(),
                status,
            }
        }).catch((err) => {
            res.json({ mess: err })
        }).then(() => {
            res.json({ mess: 'successfully updated' })
        })
}
module.exports = { add, fetch, remove, edit }