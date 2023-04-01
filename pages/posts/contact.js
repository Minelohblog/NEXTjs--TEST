import META from '../../components/meta'
import TOP from '../../components/header'
import styles from '../../styles/contact.module.css'

export default function contact() {

    return (
      <>
        <META></META>
        <TOP></TOP>
        <div className={styles.contact}>
        <div className="container">
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="ea78e2c9-d713-4f58-b638-4c989e5d1de9" />

            <div className="mb-3">
            <label htmlFor="email">メールアドレス</label>
            <input id="email" name="email" type="email" className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
            <label htmlFor="message" className="form-label">問合せ内容</label>
            <textarea id="message" name="message" className="form-control" rows="3"></textarea>
            </div>
            <div className="mb-3">
            <button type="submit" className="btn btn-primary">送信</button>
            </div>
        </form>
        </div>
        </div>
      </>
    )
  }