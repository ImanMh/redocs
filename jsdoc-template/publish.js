const fs = require('fs')

/**
 * Publish hook for the JSDoc template.  Writes to JSON stdout.
 * @param {function} data The root of the Taffy DB containing doclet records.
 * @param {Object} opts Options.
 */
exports.publish = function(data, opts) {

  // First we retrive all docs from data
  const docs = data().get().filter(doc => !doc.undocumented)

  // Then we search for all modules in docs
  let modules = docs.filter(doc => doc.kind === 'module')

  // Now we can assign all childs of each module to them
  // NOTE: We use array of assignedDocs to detect which docs are assigned to modules
  //       so we ignore them in the next step
  let assignedDocs = []
  modules = modules.reduce((prev, curr) => {
    const childs = docs.filter(doc => {
      if (doc.memberof === curr.longname) {
        assignedDocs.push(doc.___id)
        
        return doc
      }
    })

    return [
      ...prev,
      { ...curr, childs }
    ]
  }, [])

  // Finally we should find all docs that isn't member of any module
  const unknownDocs = docs.filter(doc => doc.kind !== 'module' && !assignedDocs.includes(doc.___id))

  // Generate output
  fs.writeFileSync(opts.destination, JSON.stringify({docs: [ ...modules, ...unknownDocs ]}, null, 2));

};