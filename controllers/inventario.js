const { Router } = require('express')

const router = Router();

router.post('/list', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro creado'
    })
})

router.get('/list', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro creado'
    })
})

router.get('/list/:id', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro creado'
    })
})

router.put('/list', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro creado'
    })
})

router.delete('/list', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro creado'
    })
})

module.exports = router;