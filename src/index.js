'use strict'

const template = require('@babel/template').default
const t = require('@babel/types')

const helper = name => template.program.ast(`
  function ${name}(val) {
    return val === null || typeof val === 'undefined'
  }
`)

function plugin() {
  return {
    visitor: {
      MemberExpression(path, state) {
        const node = path.node
        const property = node.property

        if (
          property.name !== 'isNil' ||
          path.container.type === 'CallExpression'
        ) {
          return
        }

        let {isnil} = state.file.declarations

        if (!isnil) {
          isnil = state.file.scope.generateUidIdentifier('isnil')
          state.file.declarations.isnil = isnil

          const nodes = helper(isnil.name).body
          for (const node of nodes) {
            node._compact = true
            state.file.path.unshiftContainer('body', nodes)
          }
        }

        path.replaceWith(
          t.callExpression(t.identifier(isnil.name), [node.object])
        )
      }
    }
  }
}

module.exports = plugin
