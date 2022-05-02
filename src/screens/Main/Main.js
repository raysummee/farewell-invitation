import React from 'react'
import classes from './Main.module.css';
import decor from '../../assets/favpng_christmas-ornament-holiday-christmas-decoration Small.png'
import { useMediaQuery } from 'react-responsive'
import 'animate.css';
import Confetti from 'react-confetti'
// import useWindowSize from 'react-use/lib/useWindowSize'
import {
  useWindowSize,
} from '@react-hook/window-size'


export default function Main() {
  const isSmall = useMediaQuery({ query: '(max-width: 406px)' })
  // const { width, height } = useWindowSize()
  const [width, height] = useWindowSize()

  return (
    <div>
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </head>
        <Confetti
          height={height}
          width={width}
        />
        <div className={classes.decor_top}/>
        <div className={classes.decor_bottom}/>
        <div className={classes.decor_left}/>
        <div className={classes.decor_right}/>
        <div className={classes.dev}>
          <p>Developed By </p>
          <p>Angshuman Barpujari</p>
        </div>
        <img src={decor} alt="decoration" className={`${classes.decor_light} animate__animated animate__tada animate__infinite animate__slow`}/>
        <div className={classes.content}>
            <h2 className={`${classes.heading} animate__animated animate__backInLeft`}>Farewell</h2>
            <div className={`${classes.subheading_div} animate__animated animate__jackInTheBox`}>
              <div className={classes.line_l}/>
              <span className={classes.subheading}>honoring</span>
              <div className={classes.line_l}/>
            </div>
            <div className={`${classes.recipient} animate__animated animate__fadeInDown animate__delay-1s`}>
              <p>
              CSE SENIORS
              </p>
              <p>
              8TH SEMESTER
              </p>
            </div>
            <div className={`${classes.recipient} ${classes.alt_txt} animate__animated animate__fadeInDown animate__delay-1s`}>
              We cordially invite our 4th year CSE Students on their farewell. We expect your gracious presence.
            </div>
            <div className={`${classes.table_pad}  animate__animated animate__fadeInDown animate__delay-2s`}>
              <table>
                <tr>
                  <td className={classes.td_flx_horz}>
                    <div className={classes.date_big}>
                      2022
                    </div>
                    <div>
                      <div className={`${classes.glitter}`}>SATURDAY</div>
                      <div className={`${classes.glitter}`}>APRIL 30TH</div>
                    </div>
                  </td>
                  <td>
                    <div className={!isSmall? `${classes.glitter}`: `${classes.date_big}`}>11AM</div>
                    {/* <div clasjsName={classes.glitter}>AT SET SEMINAR HALL</div> */}
                  </td>
                </tr>
              </table>
            </div>
        </div>
    </div>
  )
}
