import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('usuario', usuarioSchema)
