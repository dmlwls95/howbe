import { AnimationController } from '@ionic/angular';
const animationCtrl = new AnimationController();
export const enterAnimation = (baseEl: any) => {


  const backdropAnimation = animationCtrl.create()
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 0.4);

  const wrapperAnimation = animationCtrl.create()
    .addElement(baseEl.querySelector('.modal-wrapper'))
    .beforeStyles({ 'opacity': 1})
    .fromTo('transform', 'translateX(100%)', 'translateX(0%)');


  return animationCtrl.create()
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(400)
    .beforeAddClass('show-modal')
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

export const leaveAnimation = (baseEl: any) => {
  const backdropAnimation = animationCtrl.create()
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 0.4);

  const wrapperAnimation = animationCtrl.create()
    .addElement(baseEl.querySelector('.modal-wrapper'))
    .beforeStyles({ 'opacity': 1})
    .fromTo('transform', 'translateX(0%)', 'translateX(100%)');


  return animationCtrl.create()
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(400)
    .beforeAddClass('show-modal')
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

