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
        msg: 'Libro mostrado'
    })
})

router.get('/list/:id', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro mostrado jasjjsa'
    })
})

router.put('/list', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro actualizado'
    })
})

router.delete('/list', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Libro eliminado'
    })
})

module.exports = router;