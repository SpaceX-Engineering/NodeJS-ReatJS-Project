exports.signup = async (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
 
      const user = new User({
        name: name,
        email: email,
        password: password
      });
      const result = await user.save();
      console.log('User created Successfully!')
      res.json({ message: 'User created Successfully!', userId: result._id });

  };