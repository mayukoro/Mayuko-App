import React from 'react';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import Avatar from 'material-ui/Avatar';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
} from 'material-ui/Dialog';

class UserButton extends React.Component {

  render() {
    const displayButton = () => {
      if (this.props.user === null) {
        return (
          <div>
            <Button color='contrast'
                    onClick={
                      this.props.handleDialog({
                        name: 'signUpDialogOpen', open: true
                      })
                    }
            >
              新規ユーザー追加
            </Button>
            <Button color="contrast"
                    onClick={this.props.handleDialog({
                        name: 'loginDialogOpen', open: true
                      }
                    )}
            >
              ログインする
            </Button>
          </div>
        )
      } else {
        return (
          <Avatar color="contrast"
                  onClick={this.props.handleDialog(
                    {name: 'logoutDialogOpen', open: true})}
          >
            {this.props.user.email.slice(0, 2)}
          </Avatar>
        )
      }
    };
    return (
      <div>
        {displayButton()}
        <Dialog onRequestClose={this.props.handleDialog({
          name: 'signUpDialogOpen',
          open: false
        })}
                open={this.props.signUpDialogOpen}>
          <DialogTitle>
            新規ユーザー追加
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              label="name"
              value={this.props.name}
              helperText="半角英数"
              onChange={this.props.handleFormChange('name')}
              type='text'
            />
            <TextField
              fullWidth
              label="email"
              value={this.props.email}
              helperText="半角英数"
              onChange={this.props.handleFormChange('email')}
              type='email'
            />
            <TextField
              fullWidth
              label="password"
              value={this.props.password}
              helperText="半角英数"
              onChange={this.props.handleFormChange('password')}
              type='password'
            />
            <TextField
              fullWidth
              label="password_confirmation"
              value={this.props.password_confirmation}
              helperText="半角英数"
              onChange={this.props.handleFormChange('password_confirmation')}
              type='password'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleSubmitSignUp()}>
              新規追加する
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog onRequestClose={this.props.handleDialog({
          name: 'loginDialogOpen',
          open: false,
          stateToBeChanged: {
            email: '',
            password: '',
            loginDialogOpen: false
          }
        })}
                open={this.props.loginDialogOpen}>
          <DialogTitle>
            ログイン
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              label="email"
              value={this.props.email}
              helperText="半角英数"
              onChange={this.props.handleFormChange('email')}
              type='email'
            />
            <TextField
              fullWidth
              label="password"
              value={this.props.password}
              helperText="半角英数"
              onChange={this.props.handleFormChange('password')}
              type='password'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleSubmitLogin()}>
              ログインする
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog onRequestClose={this.props.handleDialog(
          {
            name: 'logoutDialogOpen',
            open: false
          })}
                open={this.props.logoutDialogOpen}
        >
          < DialogTitle>
            ログアウトしますか？
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.props.handleSubmitLogout()}>
              ログアウトする
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default UserButton;