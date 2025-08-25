
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
    const filter = req.params.filter
    console.log(filter)
    try {
        const query = { username };
        if (filter == 'today') {
            const startDay = new Date()
            startDay.setHours(0, 0, 0, 0)
            const endDay = new Date()
            endDay.setHours(23, 59, 59, 999)

            query.deadline = { $gte: startDay, $lte: endDay }
        }
        else if (filter === 'next 7 days') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const startNextWeek = new Date(today);
            startNextWeek.setDate(startNextWeek.getDate() + 1);

            const endNextWeek = new Date(today);
            endNextWeek.setDate(endNextWeek.getDate() + 7);
            endNextWeek.setHours(23, 59, 59, 999);

            query.deadline = { $gte: startNextWeek, $lte: endNextWeek };
        }
        else if (filter !== 'all') {
            query.priority = filter;
        }
        const tasks = await taskModel.find(query).sort({ _id: -1 });
        const recentActivity = await taskModel.find({ username }).sort({ _id: -1 })
        const lowPriority = await taskModel.find({ priority: 'low' })
        const mediumPriority = (await taskModel.find({ priority: 'medium' }))
        const highPriority = (await taskModel.find({ priority: 'high' }))
        const completed = (await taskModel.find({ status: 'completed' }))
        const pending = (await taskModel.find({ status: 'inProgress' }))

        const count = await taskModel.countDocuments()
        res.json({ task: tasks, recentActivity, stats: { count, lowPriority: lowPriority.length, mediumPriority: mediumPriority.length, highPriority: highPriority.length, completed: completed.length, pending: pending.length } })
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