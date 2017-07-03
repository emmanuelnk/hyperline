import React from 'react'
import Component from 'hyper/component'
import git from 'git-state'

class PluginIcon extends Component {
  styles() {
    return {
      'git-icon': {
        fill: '#fff'
      }
    }
  }
}

export default class Git extends Component {
  static displayName() {
    return 'Git status plugin'
  }

  constructor(props) {
    super(props)

    this.gitState = {
      dirty: 0,
      branch: '',
      ahead: 0,
      untracked: 0,
      stashes: 0
    }

    this.iconState = {}
  }

  getGitBranch() {
    git.isGit(__dirname, exists => {})
  }
}
